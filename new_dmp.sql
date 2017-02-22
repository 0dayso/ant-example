USE new_dmp;

-- 创建菜单项目表
CREATE TABLE `new_dmp`.`category`(
  `id` INT(11) NOT NULL,
  `title` VARCHAR(100) NOT NULL COMMENT '菜单项名称',
  `alias` VARCHAR(100) NOT NULL COMMENT '别名(url)',
  `icon` VARCHAR(100) NOT NULL COMMENT '图标',
  `lft` INT(11) NOT NULL,
  `rgt` INT(11) NOT NULL,
  `sorts` INT(11) NOT NULL COMMENT '是否开启',
  `enabled` TINYINT(1) NOT NULL DEFAULT '1' COMMENT '排序',
  PRIMARY KEY(`id`)
) ENGINE = InnoDB CHARSET = utf8 COMMENT = '菜单项目表';