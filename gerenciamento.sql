create database bd_gestao_financeira;
use bd_gestao_financeira;

create table tb_nivel(
	cd_nivel primary key auto_increment,
	nm_nivel varchar(200)
);

create table tb_responsavel(
	cd_responsavel primary key auto_increment,
	nm_responsavel varchar(250)
);

create table tb_forma_pagto(
	cd_forma_pagto primary key auto_increment,
	nm_forma_pagto varchar(250)
);

create table categoria(
	cd_categoria primary key auto_increment,
	nm_categoria varchar(250)
);

create table tb_usuario(
	cd_usuario primary key auto_increment,
	nm_usuario varchar(250),
	ds_login varchar(300),
	ds_senha varchar(300),
	id_responsavel int,
	id_nivel int
);

create table tb_lancamento(
	cd_lancamento primary key auto_increment,
	ds_lancamento varchar(200) not null,
	dt_lancamento date not null,
	vl_lancamentos decimal(8,2) not null,
	nr_parcela_atual int,
	nr_parcela_total int,
	dt_vencimento date not null
	id_usuario int,
	id_categoria int,
	id_forma_pagto int not null,
	id_responsavel int,
);

-- alter table tabela foreign key fk_tabela_tabela(id_exemplo) references tabela(cd_exemplo);

alter table tb_usuario foreign key fk_usuario_responsavel(id_responsavel) references tb_usuario(cd_usuario);
alter table tb_usuario foreign key fk_usuario_nivel(id_nivel) references tb_nivel(cd_nivel);
alter table tb_lancamento foreign key fk_lancamento_usuario(id_usuario) references tb_usuario(cd_usuario);
alter table tb_lancamento foreign key fk_lancamento_categoria(id_categoria) references tb_categoria(cd_categoria);
alter table tb_lancamento foreign key fk_lancamento_pagto(id_forma_pagto) references tb_forma_pagto(cd_forma_pagto);
alter table tb_lancamento foreign key fk_lancamento_responsavel(id_responsavel) references tb_responsavel(cd_responsavel);
