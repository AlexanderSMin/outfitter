from .db import db
from .user import User

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo_url = db.Column(db.String)
    caption = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        user = User.query.get(self.user_id)

        return {
            "id": self.id,
            "user_id": self.user_id,
            "caption": self.caption,
            "photo_url": self.photo_url,
            "username": user.username
        }

    def edit_caption(self, caption):
        self.caption = caption
        return caption

    user = db.relationship("User", back_populates="photos")
    replies = db.relationship("Reply", back_populates="photos", cascade="all, delete")
