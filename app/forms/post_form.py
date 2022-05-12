from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, URL
# from app.models import Photo

class PostForm(FlaskForm):
    caption = StringField("Caption", validators=[DataRequired(message='Please provide a caption')])
    photo_url = StringField("Photo Url")
