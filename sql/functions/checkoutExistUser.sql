create or replace function checkoutExistUser (letLogin varchar)

returns integer as

$$

  declare
    resultCheckoutExistUser integer;

  begin

    select count (userid) from users where login = letLogin into resultCheckoutExistUser;

    if resultCheckoutExistUser < 1 then
      return 0;

      elsif resultCheckoutExistUser > 0 then
        return 1;
    end if;


  end;

$$
language 'plpgsql';
