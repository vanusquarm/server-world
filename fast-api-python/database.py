import sqlalchemy as sqlalchemy
import sqlalchemy.ext.declarative as declarative

import sqlalchemy.orm as orm

DB_URL = "sqlite:///./dbfile.db"
# DB_URL = "postgresql://dbuser:password@localhost/dbname"
# DB_URL = "mysql://dbuser:password@localhost/dbname"
# engine = sqlalchemy.create_engine(DB_URL)

engine = sqlalchemy.create_engine(DB_URL, connect_args={"check_same_thread"})
SessionLocal = orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative.declarative_base()
