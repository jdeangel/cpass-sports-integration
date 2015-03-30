# Require any additional compass plugins here.
require 'compass'
require 'breakpoint'
require 'singularitygs'
require 'toolkit'
require 'modular-scale'
require 'color-schemer'

require 'sassy-buttons'
require 'compass-normalize'
require 'bootstrap-sass'


# Set this to the root of your project when deployed:
http_path = "./"
css_dir = "stylesheets"
sass_dir = "scss"
images_dir = "images"
javascripts_dir = "javascripts"
fonts_dir = "public/fonts"


# You can select your preferred output style here (can be overridden via the command line):
# output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Change this to :production when ready to deploy the CSS to the live server.
# Note: If you are using grunt.js, these variables will be overriden.
environment = :development
#environment = :production

# In development, we can turn on the debug_info to use with FireSass or Chrome Web Inspector. Uncomment:
#debug = true
sourcemap = true


##############################
## You probably don't need to edit anything below this.
##############################

# Disable cache busting on image assets
asset_cache_buster :none

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
#output_style = (environment == :development) ? :expanded : :compressed

# Pass options to sass. For development, we turn on the FireSass-compatible
# debug_info if the debug config variable above is true.
#sass_options = (environment == :development && debug == true) ? {:debug_info => true} : {}
