drop database if exists attack_test;
create database attack_test;
use attack_test;

create table users(
	user_id int primary key auto_increment,
    user_name varchar(50) not null unique,
    password varchar(2048) not null,
	disabled boolean not null default(0)
);

create table roles (
	role_id int primary key auto_increment,
    role_name varchar(50) not null unique
);

create table user_roles (
	user_id int not null,
    role_id int not null,

   constraint fk_userroles_user foreign key (user_id) references users(user_id),
   constraint fk_userroles_role foreign key (role_id) references roles(role_id),
   constraint pk_userroles primary key (user_id, role_id)

);

create table high_scores (
	high_score_id int primary key auto_increment,
    high_score int not null,
    user_id int not null,

    constraint fk_userhighscore foreign key (user_id) references users(user_id)
);

create table games (
	game_id int primary key auto_increment,
    game_name varchar(50) not null unique,
    game_description varchar(5000) not null
);



select high_scores.high_score_id, high_scores.high_score, users.user_name, users.disabled
from high_scores
INNER JOIN users
ON high_scores.user_id = users.user_id
order by high_scores.high_score asc
limit 1000;


insert into games
	(game_name, game_description)
values
	('Bay Window', 'The Bay Window task has you searching for the picture within the ring. Use your mouse to drag to spin the ring and find the image.'),
	('Flashlight', 'The Flashlight tests your skills in finding an object while your field of view is very limited. Use your mouse to search through the darkness and find the light switch. Once you have found it flip the switch by clicking on it.'),
	('Drag Counter', 'The Drag counter is a speed trial in recognizing the goal. Use your mouse to click and drag the counter to the required count. Once you have successfully done that click continue to move on.'),
	('Bookshelf', 'The Bookshelf requires you to find a specific book in the bookshelf. Use your mouse to search for the requested book. Once you have found it click to confirm.'),
	('Picture Tear','The Picture Tear is an investigation of wits to test your puzzle solving skills. Deduce the solution and enact the goal with your mouse to move on.');

insert into users (user_name, password, disabled) values
 ('victory','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('carl','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('matthew','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('gatekeeper','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('apple','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('since','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('practice','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('call','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0)
,('pretty','$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa',0);

insert into user_roles (user_id, role_id) values
(1,2)
,(2,2)
,(3,2)
,(4,1)
,(5,1)
,(6,1)
,(7,1)
,(8,1)
,(9,1);

INSERT INTO high_scores (high_score, user_id)
	VALUES 
    (33, 1),
    (37, 2),
    (44, 3);
    
