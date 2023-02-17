import datetime as datetime 
import sqlalchemy as sqlalchemy
import sqlalchemy.orm as orm
import passlib.hash as hash
import database as database

class UserModel(database.Base):
  __tablename__ = "post"
  id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, index=True)
  user_id = _sqlalchemy.Column(_sqlalchemy.Integer, _sqlalchemy.ForeignKey("users.id"))
  post_title = _sqlalchemy.Column(_sqlalchemy.String, index=True)
  post_description = _sqlalchemy.Column(_sqlalchemy.String, index=True)
  created_at = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.datetime.utcnow())
  user = _orm.relationship("User”, back_populates="post")
