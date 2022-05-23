from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')
    if len(username) < 3 or len(username) > 40:
        raise ValidationError('Username must be between 3 and 40 characters')


# def firstName_check(field):
#     firstName= field.data
#     if len(firstName) > 50:
#         raise ValidationError('Provided first name too long')


class SignUpForm(FlaskForm):
    first_name = StringField(
        'first_name', validators=[DataRequired(message='Please provide a first name'),]
    )
    last_name = StringField(
        'last_name', validators=[DataRequired(message='Please provide a last name')]
    )
    username = StringField(
        'username', validators=[DataRequired(message='Please provide a username'), username_exists])
    email = StringField('email', validators=[DataRequired(message='Please provide an email'), Email("Please provide a valid email"),user_exists])
    password = StringField('password', validators=[DataRequired(message='Please provide a password')])
