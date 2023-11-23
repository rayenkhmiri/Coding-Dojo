SELECT * FROM dojos_and_ninjas.dojos;
insert into dojos(name) values
("rayen"),("boss"),("patron");

SELECT * FROM dojos;
delete from dojos 
where id=1 or id=2 or id=3 ;

insert into dojos(name) values
("hkkhkhk"),("zzzz"),("pip");

select * from ninjas;
insert into ninjas(first_name,last_name,age,dojo_id) values("pc","hp",100,4),("giga","byte",23,4),("apap","ahah",21,5),
("pc","hp",100,6),("giga","byte",23,6),("apap","ahah",21,6),("pc","hp",100,7),("giga","byte",23,7),("apap","ahah",21,7);

SELECT * FROM ninjas join dojos on ninjas.dojos_id = dojos.id and ninjas.id=8;
 
 SELECT * FROM ninjas join dojos on ninjas.dojos_id = dojos.id;

ss

