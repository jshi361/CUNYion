CREATE TABLE Account (
  akey Serial CONSTRAINT accountkey PRIMARY KEY,
  name char(64),
  email char(128),
  student_id integer,
  create_time timestamp DEFAULT current_timestamp,
  lastLogin timestamp DEFAULT current_timestamp,
  CONSTRAINT studentid UNIQUE(student_id)
);
