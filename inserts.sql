use MEC;

-- Roles
INSERT INTO roles (id, nameRole, createdAt, updatedAt) 
VALUES
(1,'Administrador', CURDATE(), CURDATE()),
(2,'Medico', CURDATE(), CURDATE()),
(3,'Administrativo', CURDATE(), CURDATE()),
(4,'Paciente', CURDATE(), CURDATE());

-- Races
INSERT INTO races (id,name, createdAt, updatedAt) 
VALUES (1,'Elfo', CURDATE(), CURDATE()),
(2,'Enano', CURDATE(), CURDATE()),
(3,'Mago', CURDATE(), CURDATE()),
(4,'Hobbit', CURDATE(), CURDATE()),
(5,'Humano', CURDATE(), CURDATE()),
(6,'Nazgul', CURDATE(), CURDATE()),
(7,'Orco', CURDATE(), CURDATE()),
(8,'Maia', CURDATE(), CURDATE());

-- City
INSERT INTO city (id,name, createdAt, updatedAt)
VALUES (1,'Erebor', curdate(), curdate()),
(2,'Gondor', curdate(), curdate()),
(3,'Hobbiton', curdate(), curdate()),
(4,'Mordor', curdate(), curdate()),
(5,'Moria', curdate(), curdate()),
(6,'Rohan', curdate(), curdate());

-- Plan
INSERT INTO plan (id,planCode, planName, createdAt, updatedAt) 
VALUES (1,'MEC10', 'Middle Earth Clinic Plan 10', curdate(), curdate()),
(2,'MEC20', 'Middle Earth Clinic Plan 20', curdate(), curdate()),
(3,'MEC30', 'Middle Earth Clinic Plan 30', curdate(), curdate()),
(4,'MEC40', 'Middle Earth Clinic Plan 40', curdate(), curdate()),
(5,'MEC50', 'Middle Earth Clinic Plan 50', curdate(), curdate()),
(6,'MEC-ELFOS', 'Middle Earth Clinic Plan Elfos', curdate(), curdate());

-- Document type
INSERT INTO documentTypes (id, RaceId, docTypeCode, docTypeName, createdAt, updatedAt)
VALUES (1,2, 'DD', 'Documento Enano', curdate(), curdate()),
(2,1, 'DE', 'Documento Elfo', curdate(), curdate()),
(3,4, 'DH', 'Documento Hobbit', curdate(), curdate()),
(4,3, 'DM', 'Documento Mago', curdate(), curdate()),
(5,6, 'DN', 'Documento Nazgul', curdate(), curdate()),
(6,7, 'DO', 'Documento Orco', curdate(), curdate()),
(7,5, 'DU', 'Documento Humano', curdate(), curdate()),
(8,8, 'EMPLEADO', 'Id Empleado', curdate(), curdate());

-- Clinics
INSERT INTO clinics (id,CityId, name, createdAt, updatedAt)
VALUES (1,2, 'Clinica Gondor', curdate(), curdate()),
(2,3, 'Clinica La Comarca', curdate(), curdate()),
(3,4, 'Clinica Mordor', curdate(), curdate()),
(4,5, 'Clinica Moria', curdate(), curdate());

-- Speciality
INSERT INTO specialty (id,name, description, createdAt, updatedAt) 
VALUES (1,'Addicciones', 'Addiciones a substancias u objetos', curdate(), curdate()),
(2,'Clinica Medica', 'Controles generales', curdate(), curdate()),
(3,'Heridas Magicas', 'Heridas causadas por maleficios o hechizo', curdate(), curdate()),
(4,'Nutricion', 'Dietas y estilos de vida saludables', curdate(), curdate()),
(5,'Psicologia', 'Cuidados de la salud mental', curdate(), curdate()),
(6,'Mordeduras', 'Mordeduras de animales magicos', curdate(), curdate()),
(7,'Picadura Araña gigante', 'Picaduras venenosas', curdate(), curdate()),
(8,'Quemaduras', 'Quemaduras de animales magicos', curdate(), curdate()),
(9,'Cortes de Nazgul', 'Cortes de Nazgul', curdate(), curdate()),
(10,'Embrujos Irreversibles', 'Embrujos cronicos', curdate(), curdate()),
(11,'Maleficios', 'Maleficios oscuros', curdate(), curdate()),
(12,'Encantamientos mal realizados', 'Encantamientos propios o ajenos', curdate(), curdate()),
(13,'Accidentes de aguilas', 'Accidentes en las alturas', curdate(), curdate()),
(14,'Necrologia', 'Autopsias', curdate(), curdate());

-- ###USERS#####
INSERT INTO users (id, password, docNumber, name, lastName, gender, birthdate, address, phone, mail, RoleId, CityId, DocTypeId, RaceId, PlanId, deleteRequest)
VALUES 
(1,'$2a$10$PU6cbU1Q4kQfqn5JYDmH3e2Tl2skQvam7elFE70j6rUwx4CAm9ke6', '11111111', 'Sauron', 'Master of All', 'M', STR_TO_DATE('27/12/1993', '%d/%m/%Y'), 'Torre de Sauron, Mordor', '482-487-8556','SauronADMIN@gmail.com', 1, 4, 8, 8, null, 0),
(99999,'123', '93332030', 'Kareem ', 'Morley', 'F', STR_TO_DATE('04/09/2019', '%d/%m/%Y'), '8203 East West Court Mansfield, MA 02048', '202-555-0159', 'Kareem.Morley@gmail.com', 4, 3, 7, 5, 5, 0),
(99991,'123', '85584607', 'Jared ', 'Oconnor', 'M', STR_TO_DATE('08/02/2012', '%d/%m/%Y'), '9707 West Marlborough Lane Natchez, MS 39120', '202-555-0111', 'Jared.Oconnor@gmail.com', 4, 5, 3, 4, 2, 0),
(99992,'123', '68611836', 'Cassia ', 'Solis', 'F', STR_TO_DATE('16/04/1957', '%d/%m/%Y'), '7183 South Hamilton Drive Stone Mountain, GA 30083', '202-555-0130', 'Cassia.Solis@gmail.com', 4, 1, 1, 2, 2, 1),
(99993,'123', '45312683', 'Jaidan ', 'Pearson', 'M', STR_TO_DATE('15/10/1987', '%d/%m/%Y'), '23 Silver Spear St. Elmhurst, NY 11373', '202-555-0150', 'Jaidan.Pearson@gmail.com', 4, 3, 5, 6, 1, 0),
(99994,'123', '93684355', 'Abbey ', 'Park', 'M', STR_TO_DATE('31/10/1956', '%d/%m/%Y'), '7379 S. Meadowbrook Dr. Brooklyn, NY 11201', '202-555-0176', 'Abbey.Park@gmail.com', 4, 3, 3, 4, 5, 1),
(99995,'123', '30953782', 'Harleigh ', 'Gray', 'M', STR_TO_DATE('19/06/2001', '%d/%m/%Y'), '8679 Marsh Drive Duluth, GA 30096', '202-555-0141', 'Harleigh .Gray@gmail.com', 4, 1, 2, 1, 1, 0),
(99996,'123', '31462432', 'Mackenzie ', 'Bell', 'F', STR_TO_DATE('06/11/1955', '%d/%m/%Y'), '48 Pawnee Dr. Orchard Park, NY 14127', '626-555-0106', 'Mackenzie.Bell@gmail.com', 4, 2, 7, 5, 1, 1),
(99997,'123', '93070067', 'Eli ', 'Daly', 'F', STR_TO_DATE('23/07/1968', '%d/%m/%Y'), '549 Anderson Ave. Brick, NJ 08723', '626-555-0120', 'Eli.Daly@gmail.com', 4, 3, 2, 1, 4, 0),
(99998,'123', '51293020', 'Darius ', 'Bullock', 'M', STR_TO_DATE('23/01/1981', '%d/%m/%Y'), '97 Ridge Street Union, NJ 07083', '626-555-0194', 'Darius.Bullock@gmail.com', 4, 3, 7, 5, 2, 0),
(99990,'123', '83996725', 'Manal ', 'Mcdowell', 'M', STR_TO_DATE('30/12/1975', '%d/%m/%Y'), '9082 Talbot Dr.Copperas Cove, TX 76522', '626-555-0193', 'Manal.Mcdowell@gmail.com', 2, 4, 8, 8, null, 0),
(999911,'123', '14433232', 'Mylee ', 'Beaumont', 'F', STR_TO_DATE('16/08/1988', '%d/%m/%Y'), '50 High Ridge Street Greensburg, PA 15601', '626-555-0138', 'Mylee Beaumont@gmail.com', 2, 1, 8, 8, null, 0),
(999912,'123', '30467388', 'Eric ', 'Cole', 'M', STR_TO_DATE('19/04/1999', '%d/%m/%Y'), '45 Heather Ave.Apex, NC 27502', '626-555-0159', 'Eric.Cole@gmail.com', 2, 1, 8, 8, null, 0),
(999913,'123', '22621704', 'Hayley ', 'Lake', 'F', STR_TO_DATE('15/03/1956', '%d/%m/%Y'), '7256 Glenridge Street Cambridge, MA 02138', '760-555-0105', 'Hayley.Lake@gmail.com', 2, 4, 8, 8, null, 0),
(999914,'123', '60664009', 'Atif ', 'Healy', 'M', STR_TO_DATE('21/07/2003', '%d/%m/%Y'), '875 Santa Clara Rd.Lanham, MD 20706', '760-555-0155', 'Atif.Healy@gmail.com', 2, 2, 8, 8, null, 0),
(999915,'123', '23241264', 'Lincoln ', 'Maynard', 'F', STR_TO_DATE('03/08/1989', '%d/%m/%Y'), '366 Creekside Street Derby, KS 67037', '760-555-0127', 'Lincoln.Maynard@gmail.com', 2, 2, 8, 8, null, 0),
(999916,'123', '13082890', 'Hammad ', 'Moore', 'F', STR_TO_DATE('31/01/1991', '%d/%m/%Y'), '9615 Buckingham Court Saint Cloud, MN 56301', '760-555-0199', 'Hammad.Moore@gmail.com', 2, 3, 8, 8, null, 0),
(999917,'123', '26102456', 'Simrah ', 'Millar', 'M', STR_TO_DATE('24/05/1997', '%d/%m/%Y'), '9528 Pheasant St.Highland, IN 46322', '760-555-0171', 'Simrah.Millar@gmail.com', 2, 3, 8, 8, null, 0),
(999918,'123', '49748385', 'Dean ', 'Patton', 'M', STR_TO_DATE('07/09/1982', '%d/%m/%Y'), '478 Cedarwood Ave.Twin Falls, ID 83301', '760-555-0113', 'Dean.Patton@gmail.com', 3, 3, 8, 8, null, 0),
(999919,'123', '68029089', 'Lottie ', 'Reid', 'M', STR_TO_DATE('18/10/1962', '%d/%m/%Y'), '8511 Longbranch St.Mahwah, NJ 07430', '626-555-0148', 'LottieReid@gmail.com', 4, 2, 7, 5, 1, 1),
(999920,'123', '73511637', 'Cheyanne ', 'Stein', 'M', STR_TO_DATE('24/05/1980', '%d/%m/%Y'), '41 East University Dr.Edison, NJ 08817', '626-555-0132', 'Cheyanne.Stein@gmail.com', 4, 5, 2, 1, 2, 1),
(999921,'$2a$10$ZOQBx1La7Dt9zFH9n089Xe6YHxXMe4wA1eIi8lgpMDvHVJl4Fs0Zm', '22222222', 'Gimli ', 'Enano', 'M', STR_TO_DATE('24/12/1980', '%d/%m/%Y'), 'Alguna Cueva', '626-555-0132', 'gimli@gmail.com', 3, 5, 8, 8, null, 0),
(999922,'123', '33333333', 'Legolas ', 'Elfo', 'M', STR_TO_DATE('24/11/1980', '%d/%m/%Y'), 'Donde mi padre no me moleste', '626-555-0132', 'legolas@gmail.com', 2, 5, 8, 8, null, 0),
(999923,'$2a$10$axMe32DjcEqvM1.KnFVWfedPkuoshnYdYNV4MNVlk5aA0JQQ79N22', '44444444', 'Aragorn ', 'TrueKing', 'M', STR_TO_DATE('24/06/1980', '%d/%m/%Y'), 'Castillo de gondor', '626-555-0132', 'aragorn@gmail.com', 2, 4, 8, 8, null, 0),
(999924,'$2a$10$.0ILHE2SNGiD5KZ9mXSqdOSmt7HbVewzm4cdYQZWeR4T477iYryxy', '55555555', 'Frodo ', 'Baggins', 'M', STR_TO_DATE('24/03/1980', '%d/%m/%Y'), 'Agujero numero 2, el bolson cerrado', '626-555-0132', 'frodo@gmail.com', 4, 3, 4, 4, 4, 0);


-- ###MEDIC DETAIL#####
INSERT INTO medic_detail (id, UserId, ClinicId, SpecialtyId)
VALUES (1, 999922, 3, 10),
(2, 999923, 1, 4),
(3, 99990, 3, 8),
(4, 999911, 4, 6),
(5, 999912, 4, 14),
(6, 999913, 1, 13),
(7, 999914, 1, 9),
(8, 999915, 3, 1),
(9, 999916, 2, 6),
(10, 999917, 2, 8),
(11, 999922, 4, 1),
(12, 999923, 2, 3),
(13, 99990, 2, 2),
(14, 999911, 3, 10),
(15, 999912, 1, 6),
(16, 999913, 2, 14),
(17, 999914, 1, 10),
(18, 999915, 4, 5),
(19, 999916, 2, 14),
(20, 999917, 4, 5);


-- ###APPOINTMENT#####
INSERT INTO appointment (id, date, startHour, endHour, completed, UserId, MedicDetailId)
VALUES 
(1, STR_TO_DATE('08/12/2020', '%d/%m/%Y'), '16:00', '16:30', 0, 999924, 16),
(2, STR_TO_DATE('23/09/2020', '%d/%m/%Y'), '13:00', '13:30', 0, 99991, 6),
(3, STR_TO_DATE('17/11/2020', '%d/%m/%Y'), '17:30', '18:00', 0, 99992, 14),
(4, STR_TO_DATE('17/10/2020', '%d/%m/%Y'), '07:30', '08:00', 0, 99993, 15),
(5, STR_TO_DATE('18/12/2020', '%d/%m/%Y'), '09:00', '09:30', 0, 99994, 13),
(6, STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '16:00', '16:30', 0, 99995, 17),
(7, STR_TO_DATE('01/10/2020', '%d/%m/%Y'), '13:30', '14:00', 0, 99996, 6),
(8, STR_TO_DATE('15/11/2020', '%d/%m/%Y'), '09:30', '10:00', 0, 999924, 11),	
(9, STR_TO_DATE('27/11/2020', '%d/%m/%Y'), '08:00', '08:30', 0, 99997, 11),
(10, STR_TO_DATE('27/11/2020', '%d/%m/%Y'), '07:00', '07:30', 0, 99998, 17),
(11, STR_TO_DATE('21/10/2020', '%d/%m/%Y'), '17:30', '18:00', 0, 99991, 2),
(12, STR_TO_DATE('28/11/2020', '%d/%m/%Y'), '07:00', '07:30', 0, 999924, 4),
(13, STR_TO_DATE('07/12/2020', '%d/%m/%Y'), '17:30', '18:00', 0, 99992, 2),
(14, STR_TO_DATE('05/12/2020', '%d/%m/%Y'), '10:00', '10:30', 0, 99993, 9),
(15, STR_TO_DATE('08/10/2020', '%d/%m/%Y'), '13:00', '13:30', 0, 99994, 7),
(16, STR_TO_DATE('15/09/2020', '%d/%m/%Y'), '07:00', '07:30', 0, 999924, 20),
(17, STR_TO_DATE('08/11/2020', '%d/%m/%Y'), '10:30', '11:00', 0, 99993, 19),
(18, STR_TO_DATE('19/12/2020', '%d/%m/%Y'), '07:00', '07:30', 0, 99994, 16),
(19, STR_TO_DATE('26/10/2020', '%d/%m/%Y'), '09:30', '01:00', 0, 99995, 5),
(20, STR_TO_DATE('28/12/2020', '%d/%m/%Y'), '13:30', '14:00', 0, 99996, 6);


-- ###PRESCRIPTION#####
INSERT INTO prescription (id, date, drug, comment, UserId, MedicDetailId, file, filename, approved)
VALUES (1, STR_TO_DATE('17/8/2020', '%d/%m/%Y'), 'Sildenafil', '28 comprimidos', 999924, 1, '','recetaSildenafil', 1),
(2, STR_TO_DATE('18/8/2020', '%d/%m/%Y'), 'Ibuprofeno', '24 comprimidos', 99993, 1, '','recetaIbuprofeno', 1),
(3, STR_TO_DATE('31/7/2020', '%d/%m/%Y'), 'Paracetamol', 'Para las migraña', 99994, 2, '','recetaParaectamol', 0),
(4, STR_TO_DATE('01/8/2020', '%d/%m/%Y'), 'Rivotril', 'En juguito', 99995, 2, '','recetaRivotril', 0),
(5, STR_TO_DATE('15/8/2020', '%d/%m/%Y'), 'Clonazepan', 'El paquete mas grande que haya', 999924, 2, '','recetaclonazepan', 1),
(6, STR_TO_DATE('27/7/2020', '%d/%m/%Y'), 'Quetiapina', 'En juguito', 99997, 1, '','recetaQuetiapina', 2),
(7, STR_TO_DATE('27/7/2020', '%d/%m/%Y'), 'Haloperidol', '36 comprimidos', 99998, 2, '','recetaHaloperidol', 1),
(8, STR_TO_DATE('21/7/2020', '%d/%m/%Y'), 'Ziprasidona', '10 comprimidos', 99991, 2, '','recetaZiprasidona', 1),
(9, STR_TO_DATE('28/7/2020', '%d/%m/%Y'), 'Ibuprofeno', '16 comprimidos', 999924, 2, '','recetaIbuprofeno', 0),
(10, STR_TO_DATE('07/8/2020', '%d/%m/%Y'), 'Paracetamol', 'Para las migraña', 999924, 1, '','recetaParaectamol', 0);


-- #approved: 0 pendiente, 1 aprobada, 2 rechazada



-- ###MEDICAL RECORD#####
INSERT INTO medical_record (id, allergyActive, allergyDrug, cardioActive, cardioComment, pulmonaryActive, pulmonaryComment, digestiveActive, digestiveComment, renalActive, renalComment, neurologicalActive, neurologicalComment, diabetesActive, diabetesComment, surgicalActive, surgicalComment, treatmentActive, treatmentComment, pregnancyActive, pregnancyComment, alcoholFreq, alcoholComment, tobaccoFreq, tobacoComment, drugsFreq, drugsComment, otherFreq, otherComment, UserId)
VALUES (1,1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',0,'',99991),
(2,0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',0,'',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',0,'',0,'',2,'Este es un comentario',99992),
(3,1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',99993),
(4,0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',99994),
(5,1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',99995),
(6,0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',0,'',1,'Este es un comentario',0,'',0,'',2,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',99996),
(7,0,'',0,'',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',0,'',1,'Este es un comentario',2,'Este es un comentario',2,'Este es un comentario',0,'',99997),
(8,1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',0,'',1,'Este es un comentario',0,'',0,'',2,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',99998),
(9,0,'',0,'',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',2,'Este es un comentario',1,'Este es un comentario',99990),
(10,0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',2,'Este es un comentario',2,'Este es un comentario',999911),
(11,1,'Este es un comentario',0,'',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',2,'Este es un comentario',1,'Este es un comentario',999912),
(12,1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',0,'',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',1,'Este es un comentario',0,'',999913),
(13,0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',0,'',2,'Este es un comentario',999914),
(14,1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',0,'',1,'Este es un comentario',0,'',2,'Este es un comentario',1,'Este es un comentario',0,'',0,'',999915),
(15,1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',2,'Este es un comentario',2,'Este es un comentario',2,'Este es un comentario',999916),
(16,0,'',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',999917),
(17,1,'Este es un comentario',0,'',0,'',0,'',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',2,'Este es un comentario',0,'',999918),
(18,1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',999919),
(19,1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',0,'',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',2,'Este es un comentario',999920),
(20,0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',999921),
(21,0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',1,'Este es un comentario',0,'',999922),
(22,0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',2,'Este es un comentario',999923),
(23,0,'',0,'',0,'',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',0,'',2,'Este es un comentario',2,'Este es un comentario',1,'Este es un comentario',1,'Este es un comentario',999924),
(24,0,'',0,'',0,'',0,'',0,'',1,'Este es un comentario',1,'Este es un comentario',0,'',1,'Este es un comentario',0,'',1,'Este es un comentario',1,'Este es un comentario',2,'Este es un comentario',0,'',99999);


-- ###MEDICAL_RECORD_APPOINTMENT#####
INSERT INTO medical_record_appointment (id, date, comment, MedicDetailId)
VALUES(1,STR_TO_DATE('07/1/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',13),
(2,STR_TO_DATE('07/2/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',11),
(3,STR_TO_DATE('07/3/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',20),
(4,STR_TO_DATE('07/4/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',10),
(5,STR_TO_DATE('07/5/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',9),
(6,STR_TO_DATE('07/6/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',11),
(7,STR_TO_DATE('07/7/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',5),
(8,STR_TO_DATE('25/1/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',8),
(9,STR_TO_DATE('25/2/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',7),
(10,STR_TO_DATE('25/3/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',17),
(11,STR_TO_DATE('25/4/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',19),
(12,STR_TO_DATE('25/5/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',20),
(13,STR_TO_DATE('25/6/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',18),
(14,STR_TO_DATE('25/7/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',14),
(15,STR_TO_DATE('15/3/2020', '%d/%m/%Y'), 'Un mago nunca llega tarde, ni pronto; Llega exactamente cuando se lo propone',15);


-- ###APPOINTMENT DISPONIBLES#####
INSERT INTO appointment (id,date, startHour, endHour, completed, UserId, MedicDetailId)
VALUES 
(1,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 1),
(2,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 2),
(3,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 3),
(4,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 4),
(5,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 5),
(6,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 6),
(7,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '13:00', '14:00', 0, null, 7),
(8,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 8),
(9,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 9),
(10,STR_TO_DATE('27/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 10),
(11,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 1),
(12,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 2),
(13,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 3),
(14,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 4),
(15,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 5),
(16,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 6),
(17,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '13:00', '14:00', 0, null, 7),
(18,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 8),
(19,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 9),
(20,STR_TO_DATE('28/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 10),
(21,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 1),
(22,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 2),
(23,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 3),
(24,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 4),
(25,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 5),
(26,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 6),
(27,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '13:00', '14:00', 0, null, 7),
(28,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 8),
(29,STR_TO_DATE('29/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 9),
(30,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 10),
(31,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 1),
(32,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 2),
(33,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 3),
(34,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 4),
(35,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 5),
(36,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 6),
(37,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '13:00', '14:00', 0, null, 7),
(38,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 8),
(39,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 9),
(40,STR_TO_DATE('30/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 10),
(41,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 1),
(42,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 2),
(43,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 3),
(44,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 4),
(45,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 5),
(46,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 6),
(47,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '13:00', '14:00', 0, null, 7),
(48,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '13:00', '18:00', 0, null, 8),
(49,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 9),
(50,STR_TO_DATE('31/08/2020', '%d/%m/%Y'), '09:00', '12:00', 0, null, 10);

-- Access
INSERT INTO access (id, nameAccess, createdAt, updatedAt) 
VALUES
(1,'PatientWelcome', CURDATE(), CURDATE()),
(2,'MyAccountPatient', CURDATE(), CURDATE()),
(3,'UserAppointment', CURDATE(), CURDATE()),
(4,'Prescription', CURDATE(), CURDATE()),
(5,'PatientMedicalHistory', CURDATE(), CURDATE()),
(6,'AdminWelcome', CURDATE(), CURDATE()),
(7,'MyAccountAdmin', CURDATE(), CURDATE()),
(8,'PendingDeleteUsers', CURDATE(), CURDATE()),
(9,'ABMPatients', CURDATE(), CURDATE()),
(10,'ABMEmployee', CURDATE(), CURDATE()),
(11,'ABMRole', CURDATE(), CURDATE()),
(12,'InnerAppointment', CURDATE(), CURDATE()),
(13,'InternalMedicalHistory', CURDATE(), CURDATE()),
(14,'ManagePrescriptions', CURDATE(), CURDATE()),
(15,'Calendar', CURDATE(), CURDATE()),
(16,'CheckPatient', CURDATE(), CURDATE()),
(17,'MedicalHistory', CURDATE(), CURDATE()),
(18,'UserAppointment', CURDATE(), CURDATE()),
(19,'Prescription', CURDATE(), CURDATE()),
(20,'MedicWelcome', CURDATE(), CURDATE()),
(21,'MyAccountEmployeen Rol', CURDATE(), CURDATE()),
(22,'MedicAgenda', CURDATE(), CURDATE()),
(23,'EmployeeWelcome', CURDATE(), CURDATE()),
(24,'EmployeeAppointment', CURDATE(), CURDATE())


-- role x access
INSERT INTO roleXaccess (AccessId, RoleId, createdAt, updatedAt)
VALUES
(1, 1, curdate(), curdate()),
(6, 1, curdate(), curdate()),
(7, 1, curdate(), curdate()),
(8, 1, curdate(), curdate()),
(9, 1, curdate(), curdate()),
(10, 1, curdate(), curdate()),
(11, 1, curdate(), curdate()),
(12, 1, curdate(), curdate()),
(13, 1, curdate(), curdate()),
(14, 1, curdate(), curdate()),
(15, 1, curdate(), curdate()),
(16, 1, curdate(), curdate()),
(17, 1, curdate(), curdate()),
(18, 1, curdate(), curdate()),
(20, 2, curdate(), curdate()),
(21, 2, curdate(), curdate()),
(12, 2, curdate(), curdate()),
(13, 2, curdate(), curdate()),
(14, 2, curdate(), curdate()),
(16, 2, curdate(), curdate()),
(17, 2, curdate(), curdate()),
(18, 2, curdate(), curdate()),
(19, 2, curdate(), curdate()),
(23, 2, curdate(), curdate()),
(22, 2, curdate(), curdate()),
(24, 3, curdate(), curdate()),
(15, 3, curdate(), curdate()),
(21, 3, curdate(), curdate()),
(16, 3, curdate(), curdate()),
(17, 3, curdate(), curdate()),
(18, 3, curdate(), curdate()),
(19, 3, curdate(), curdate()),
(1, 4, curdate(), curdate()),
(2, 4, curdate(), curdate()),
(3, 4, curdate(), curdate()),
(4, 4, curdate(), curdate()),
(5, 4, curdate(), curdate());