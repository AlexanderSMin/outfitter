from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .replies import seed_replies, undo_replies

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_posts()
    seed_replies()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_posts()
    undo_replies()
    # Add other undo functions here
