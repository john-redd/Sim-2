create table houses (
  house_id serial primary key,
  name varchar(30),
  address varchar(100),
  city varchar(100),
  state varchar(2),
  zip int
);

alter table houses
add column img text;

alter table houses
add column mortgage decimal;

alter table houses
add column rent decimal;