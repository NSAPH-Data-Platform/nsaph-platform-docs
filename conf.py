# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
from nsaph_utils.docutils.codeurl import URLDomain

sys.path.insert(0, os.path.abspath('../../gitlab/nsaph/src/python'))
sys.path.insert(0, os.path.abspath('../../gitlab//tools/cms/src/python'))
sys.path.insert(0, os.path.abspath('../../gitlab//tools/epa/src/python'))
sys.path.insert(0, os.path.abspath('../../gitlab//tools/gridmet/src/python'))
add_module_names = False
autoclass_content = 'both'
autodoc_member_order = 'bysource'

# -- Project information -----------------------------------------------------

project = 'NSAPH Data Platform'
copyright = '2021, Harvard University'
author = 'Michael A Bouzinier'

# The full version, including alpha/beta/rc tags
release = '0.0.1'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx_rtd_theme',
    'sphinx.ext.autodoc',
    'sphinx.ext.todo',
    'sphinx.ext.coverage',
    'sphinx.ext.imgmath',
    'sphinx.ext.viewcode',
    'sphinx_paramlinks',
    'sphinx.ext.autosectionlabel',
    'nsaph_utils.docutils.recommonmark',
    'sphinx_sql.sphinx_sql',
    'sphinx_markdown_tables',
    'nsaph_utils.docutils.cwl_parser',
    'nsaph_utils.docutils.cwl_directive'
]

sphinxsql_include_table_attributes = True

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', '.nsaph', 'notes']


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
#html_theme = 'alabaster'
html_theme = "sphinx_rtd_theme"

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'restructuredtext',
    '.cwl': 'cwl',
}


def setup(app):
    app.add_domain(URLDomain)
