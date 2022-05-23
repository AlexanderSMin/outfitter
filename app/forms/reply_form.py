from flask import Flask
from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, ValidationError
from wtforms.validators import DataRequired

def valid_reply(form, field):
    caption = field.data
    if len(caption) > 255:
        raise ValidationError('Reply character limit exceeded')

class ReplyForm(FlaskForm):
    post_id = IntegerField('post_id')
    body = TextAreaField('body', validators=[DataRequired(message='Please provide a reply'), valid_reply])
