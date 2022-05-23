from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError


def valid_post(field):
    caption = field.data
    if len(caption) > 255:
        raise ValidationError('Post character limit exceeded')

class PostForm(FlaskForm):
    caption = StringField("Caption", validators=[DataRequired('Please provide a caption'), valid_post])
    photo_url = StringField("Photo Url")
