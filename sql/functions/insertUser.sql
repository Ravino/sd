create or replace function insertUser (letUserUuid uuid, letLogin varchar, letPassword varchar, letSalt varchar, letName varchar, letNamePage varchar)

returns integer as


$$

  declare
    letExistUser integer;


  begin

    select checkoutExistUser (letLogin) into letExistUser;

    if letExistUser = 1 then
      return 0;

    elsif letExistUser = 0 then
      insert into users (useruuid, login, password, salt, name, namepage) values (letUserUuid, letLogin, letPassword, letSalt, letName, letNamePage);
      return 1;
    end if;

  end;

$$

language 'plpgsql';
