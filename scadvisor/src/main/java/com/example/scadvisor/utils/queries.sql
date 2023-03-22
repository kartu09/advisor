insert into team (id, creation_date, description, name) VALUES ('1', '2023-02-25T14:30:45', 'Equipo number one', 'Equipo numero 1') ;
INSERT INTO team (id, creation_date, description, name) VALUES ('2', '2023-02-25', 'Equipo number two', 'Equipo numero 2');
INSERT INTO team (id, creation_date, description, name) VALUES ('3', '2023-02-25', 'Equipo number three', 'Equipo numero 3');
INSERT INTO team (id, creation_date, description, name) VALUES ('4', '2023-02-25', 'Equipo number four', 'Equipo numero 4');
INSERT INTO team (id, creation_date, description, name) VALUES ('5', '2023-02-25', 'Equipo number five', 'Equipo numero 5');


INSERT INTO PLAYER (id, creation_date, date_of_birth, team_id, dorsal, name) VALUES ('2', '2023-03-23', '1998-05-11', '1', '11', 'Jugador1');
INSERT INTO PLAYER (id, creation_date, date_of_birth, team_id, dorsal, name) VALUES ('3', '2023-03-23', '1998-05-11', '2', '2', 'Jugador2');
INSERT INTO PLAYER (id, creation_date, date_of_birth, team_id, dorsal, name) VALUES ('4', '2023-03-23', '1998-05-11', '3', '3', 'Jugador3');
INSERT INTO PLAYER (id, creation_date, date_of_birth, team_id, dorsal, name) VALUES ('5', '2023-03-23', '1998-05-11', '4', '4', 'Jugador4');

INSERT INTO MATCHS (id, creation_date, description, marcador_local, marcador_visitante, match_date, name , local_team_id, visitante_team_id) VALUES ('', '', '', '', '', '', '' ,'', '');

INSERT INTO MATCHS (id, creation_date, description, marcador_local, marcador_visitante, match_date, name , local_team_id, visitante_team_id) VALUES ('1', '2023-03-23', 'partido de prubea', '0', '0', '2023-03-23', 'partido1' ,'1', '2');
INSERT INTO MATCHS (id, creation_date, description, marcador_local, marcador_visitante, match_date, name , local_team_id, visitante_team_id) VALUES ('2', '2023-03-23', 'partido de prubea', '0', '0', '2023-03-24', 'partido2' ,'2', '3');
INSERT INTO MATCHS (id, creation_date, description, marcador_local, marcador_visitante, match_date, name , local_team_id, visitante_team_id) VALUES ('3', '2023-03-23', 'partido de prubea', '0', '0', '2023-03-25', 'partido3' ,'1', '4');
INSERT INTO MATCHS (id, creation_date, description, marcador_local, marcador_visitante, match_date, name , local_team_id, visitante_team_id) VALUES ('4', '2023-03-23', 'partido de prubea', '0', '0', '2023-03-26', 'partido4' ,'2', '4');

insert into team (id, creation_date, date_of_birth, email, name, password, role, username) VALUES ('1', '2023-03-23', '2023-03-23', 'correo1@ceee.es', 'nombre1', '1', '12345');
INSERT INTO team (id, creation_date, date_of_birth, email, name, password, role, username) VALUES ('2', '2023-03-23', '2023-03-23', 'correo2@ceee.es', 'nombre2', '2', '12345');
INSERT INTO team (id, creation_date, date_of_birth, email, name, password, role, username) VALUES ('3', '2023-03-23', '2023-03-23', 'correo3@ceee.es', 'nombre3', '2', '12345');
INSERT INTO team (id, creation_date, date_of_birth, email, name, password, role, username) VALUES ('4', '2023-03-23', '2023-03-23', 'correo4@ceee.es', 'nombre4', '3', '12345');
INSERT INTO team (id, creation_date, date_of_birth, email, name, password, role, username) VALUES ('5', '2023-03-23', '2023-03-23', 'correo5@ceee.es', 'nombre5', '3', '12345');