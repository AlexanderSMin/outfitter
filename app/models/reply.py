from .db import db
from .user import User

class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer(), db.ForeignKey('posts.id'))
    user_id = db.Column(db.Integer(),db.ForeignKey('users.id'), nullable=False)
    body= db.Column(db.String(255), nullable=False)

    comment_post=db.relationship('User', backref='comments', lazy=True)

    def to_dict(self):
        user = User.query.get(self.user_id)

        return {
            "id": self.id,
            "post_id": self.photo_id,
            "user_id": self.user_id,
            "body": self.body,
            "username": user.username
        }

    def edit_comment(self, body):
        self.body = body
        return body

    user = db.relationship("User", back_populates="replies")
    posts = db.relationship("Post", back_populates="replies")
