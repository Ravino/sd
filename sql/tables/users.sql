create table users (
  userid bigserial not null,
  useruuid uuid not null,
  login varchar not null,
  password varchar not null,
  salt varchar not null,
  email varchar default '' not null,
  phone varchar default '' not null,
  name varchar not null,
  avataralt text default '' not null,
  urlavatar varchar default '' not null,
  urlminavatar varchar default '' not null,
  namepage varchar default '' not null,
  datereg timestamptz default now () not null,
  sex varchar not null default 'neuter'
);
