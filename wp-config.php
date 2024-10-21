<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_test_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wxi=_YSceeYAWr-wIj&J7[~67(g[!;pXcXBBkb/d=$WIYv%~]XHlU#y!;AG<-C:%' );
define( 'SECURE_AUTH_KEY',  'lIzC!_QpZB`kJ[R!_SxAb(2m,&kxuys_EY`v}#=Xu`I/1m8O $.O~~pem E=w~|s' );
define( 'LOGGED_IN_KEY',    'Bdqf+uE^NOR&^aR_._^zE%n%p;YcRau2@q4=~wU]xhnr1+rGku3wTgy}}i.D5v~@' );
define( 'NONCE_KEY',        '`Y6tp%gZ,_^fPo+fdfWo@d@umj<R<3n$^Kn-pLitF8`Rp1~%+Tq?Dcc_l51mV4<u' );
define( 'AUTH_SALT',        ',DMnRlBeTB&,?P]ZuQo_8uxXg{-zVgd#eIt[ No$qR|m7cAD<|Zzw{CgA>Yp%3=N' );
define( 'SECURE_AUTH_SALT', '<-F]vr3V1U<+21wn{;i]Z?bbZ1F;7N^:WOMD89k/2kj,)L&c1bn4J8-&X7V4q/Zt' );
define( 'LOGGED_IN_SALT',   'I@tFw{*Onr-`0Mr<M*T2~s10qk$ G{IoW@PA`Cfp&B)-dvoMQi9<u5>GJ1?3vB|3' );
define( 'NONCE_SALT',       '!D=+=CeSdXf||`Y1#0HCW5($ot]M@T!frorG-utjKxR?*sg~Sj].|X&[riVT^7fI' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'dvt24_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
