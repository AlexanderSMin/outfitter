from app.models import db, Reply

def seed_replies():
    demo = Reply(
        post_id=1,
        user_id=2,
        body="I love that song too"
    )
    demo2 = Reply(
        photo_id=1,
        user_id=2,
        body="heat!"
    )

    db.session.add(demo)
    db.session.add(demo2)

    db.session.commit()


def undo_replies():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
