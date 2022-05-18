from flask import Flask
from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired

class ReplyForm(FlaskForm):
    post_id = IntegerField('Post')
    body = TextAreaField('Reply', validators=[DataRequired(message='Please provide a reply')])
