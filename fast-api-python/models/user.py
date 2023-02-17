import datetime as datetime 
import sqlalchemy as sqlalchemy
import sqlalchemy.orm as orm
import passlib.hash as hash
import database as database

class UserModel(database.Base):
  __tablename__ = "users"
  id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True)
  email = sqlalchemy.Column(sqlalchemy.String, unique=True, index=True)
  name = sqlalchemy.Column(sqlalchemy.String)
  password_hash = sqlalchemy.Column(sqlalchemy.String)
  created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.datetime.utcnow())
  post = _orm.relationship("Post”, back_populates="user")
