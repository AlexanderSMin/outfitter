from app.models import db, Post


def seed_posts():
    demo = Post(
        user_id = 2,
        caption = "High Fashion - RR"
    )

    demo2 = Post(
        user_id = 2,
        caption = "Just got these in today!",
        photo_url = "https://sneakernews.com/wp-content/uploads/2021/03/Aime-Leon-Dore-New-Balance-550-00.jpg"
    )

    db.session.add(demo)
    db.session.add(demo2)
    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()
