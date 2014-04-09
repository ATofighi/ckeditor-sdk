Ext.data.JsonP.dev_package_managers({"guide":"<h1 id='dev_package_managers-section-installing-ckeditor-with-package-managers'>Installing CKEditor with Package Managers</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_package_managers-section-custom-ckeditor-configuration'>Custom CKEditor Configuration</a></li>\n<li><a href='#!/guide/dev_package_managers-section-bower'>Bower</a></li>\n<li><a href='#!/guide/dev_package_managers-section-composer'>Composer</a></li>\n</ol>\n</div>\n\n<p><strong>CKEditor 4.3.3</strong> introduced support for two popular package managers, <a href=\"http://bower.io/\">Bower</a> and <a href=\"https://getcomposer.org/\">Composer</a>. You can now use them to install CKEditor releases.</p>\n\n<p>Both package managers will install the <code>standard-all</code> CKEditor preset that includes all official CKSource plugins with only those from the Standard installation preset compiled into the <code>ckeditor.js</code> file and enabled. <a href=\"http://ckeditor.com/presets\">See here</a> for a comparison of packages.</p>\n\n<p>Additional plugins included in the <code>standard-all</code> preset can be enabled in your configuration by using the <a href=\"#!/api/CKEDITOR.config-cfg-extraPlugins\">config.extraPlugins</a> option.</p>\n\n<p>For example, if you wanted to add the <strong>Text Color</strong> and <strong>Background Color</strong> buttons to your toolbar (the Standard preset does not include them by default), you should add the following to your custom editor configuration:</p>\n\n<pre><code>config.extraPlugins = 'colorbutton';\n</code></pre>\n\n<h2 id='dev_package_managers-section-custom-ckeditor-configuration'>Custom CKEditor Configuration</h2>\n\n<p>If you want to use package managers to keep CKEditor up to date, your custom editor configuration should not be done in any of the core CKEditor files like <code>config.js</code> (otherwise you risk overwriting them during the update process).</p>\n\n<p>It is thus recommended to use of the following strategies:</p>\n\n<ul>\n<li><a href=\"#!/guide/dev_configuration-section-defining-configuration-in-page\">Defining configuration in-page</a>.</li>\n<li><a href=\"#!/guide/dev_configuration-section-using-a-custom-configuration-file\">Using a custom configuration file</a>.</li>\n</ul>\n\n\n<p>Both options are explained in more detail in the <a href=\"http://docs.ckeditor.com/#!/guide/dev_configuration\">Setting CKEditor Configuration</a> article.</p>\n\n<h2 id='dev_package_managers-section-bower'>Bower</h2>\n\n<p>This article assumes that you have <strong>Bower</strong> already installed and added to your <code>PATH</code>. If this is not the case, please follow the <a href=\"http://bower.io/#installing-bower\">installation guide</a>.</p>\n\n<h3 id='dev_package_managers-section-usage'>Usage</h3>\n\n<p>In order to fetch the most recent build execute the following command:</p>\n\n<pre><code>bower install ckeditor\n</code></pre>\n\n<p>By default CKEditor will be placed in the <code>bower_components/ckeditor</code> directory.</p>\n\n<h3 id='dev_package_managers-section-adding-ckeditor-as-dependency-using-the-bower.json-file'>Adding CKEditor as Dependency Using the bower.json File</h3>\n\n<p>You may add CKEditor to the dependencies list inside your <code>bower.json</code> file. Just make sure to create a reference to <code>ckeditor</code> in the <code>dependencies</code> property.</p>\n\n<pre><code>{\n    \"name\": \"my-project\",\n    \"dependencies\": {\n        \"ckeditor\": \"4\"\n    }\n}\n</code></pre>\n\n<p>Then execute the following command:</p>\n\n<pre><code>bower update\n</code></pre>\n\n<h3 id='dev_package_managers-section-fetching-particular-build-preset'>Fetching Particular Build Preset</h3>\n\n<p>By default only the <code>standard-all</code> CKEditor installation preset can be fetched. However, there is a workaround to install a diffrent package using the <code>#&lt;preset&gt;/&lt;version&gt;</code> syntax.</p>\n\n<p>For example, if you would like to download the <code>full</code> preset of CKEditor 4.3.3, execute the following command:</p>\n\n<pre><code>bower install ckeditor#full/4.3.3\n</code></pre>\n\n<h2 id='dev_package_managers-section-composer'>Composer</h2>\n\n<p>This article assumes that you have <strong>Composer</strong> already up and running. If this is not the case, please follow <a href=\"https://getcomposer.org/download\">these instructions</a>.</p>\n\n<h3 id='dev_package_managers-section-usage'>Usage</h3>\n\n<p>In order to fetch the most recent CKEditor 4 build, create a <code>composer.json</code> file in the directory where you want to install CKEditor. This file should include the  following contents:</p>\n\n<pre><code>{\n    \"require\": {\n        \"ckeditor/ckeditor\": \"4.*\"\n    }\n}\n</code></pre>\n\n<p>Then execute the following command:</p>\n\n<pre><code>composer update\n</code></pre>\n\n<h3 id='dev_package_managers-section-fetching-particular-build-preset'>Fetching Particular Build Preset</h3>\n\n<p>There is a way for Composer to fetch CKEditor built with a desired preset. For each preset you can subscribe to the following branches:</p>\n\n<ol>\n<li>Latest release</li>\n<li>Stable release</li>\n<li>Latest minor release for a given major version</li>\n</ol>\n\n\n<p>The following table will explain the relation between a build and the JSON <code>require</code> value:</p>\n\n<table>\n<thead>\n<tr>\n<th>preset </th>\n<th> standard-all </th>\n<th> basic </th>\n<th> standard </th>\n<th> full</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>latest </td>\n<td> <code>dev-latest</code> </td>\n<td> <code>dev-basic/latest</code> </td>\n<td> <code>dev-standard/latest</code> </td>\n<td> <code>dev-full/latest</code></td>\n</tr>\n<tr>\n<td>stable </td>\n<td> <code>dev-stable</code> </td>\n<td> <code>dev-basic/stable</code> </td>\n<td> <code>dev-standard/stable</code> </td>\n<td> <code>dev-full/stable</code></td>\n</tr>\n<tr>\n<td>4.3.x </td>\n<td> <code>dev-4.3.x</code> </td>\n<td> <code>dev-basic/4.3.x</code> </td>\n<td> <code>dev-standard/4.3.x</code> </td>\n<td> <code>dev-full/4.3.x</code></td>\n</tr>\n</tbody>\n</table>\n\n\n<p>For example, let us consider that we want to include the <code>full</code> preset of the most up-to-date <code>4.3.x</code> release. In this case the <code>composer.json</code> file should contain the following code:</p>\n\n<pre><code>{\n    \"require\": {\n        \"ckeditor/ckeditor\": \"dev-full/4.3.x\"\n    }\n}\n</code></pre>\n\n<p class=\"tip\">\n    Only branches starting from CKEditor version <strong>4.3.x</strong> and higher are supported in this way.\n</p>\n\n","title":"Using Package Managers","meta_description":"How to install CKEditor using package managers like Bower or Composer.","meta_keywords":"ckeditor, editor, wysiwyg, install, installation, package, manager, composer, bower, preset"});