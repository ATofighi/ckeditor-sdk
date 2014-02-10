Ext.data.JsonP.dev_upgrade({"guide":"<h1 id='dev_upgrade-section-upgrading-ckeditor'>Upgrading CKEditor</h1>\n\n<p>This article describes the steps you need to take when you want to upgrade your CKEditor 4.x installation to the latest version.</p>\n\n<p class=\"tip\">\n    <strong>The latest CKEditor is always the greatest CKEditor.</strong> New releases add cool new features, support for the latest browser versions, and bug fixes. The changelog is published <a href=\"http://ckeditor.com/whatsnew\">here</a> and you can also learn about new releases by following our <a href=\"http://ckeditor.com/blog-list\">blog</a>, <a href=\"http://www.facebook.com/ckeditor\">Facebook</a>, <a href=\"https://plus.google.com/+ckeditor/posts\">Google+</a>, or <a href=\"http://twitter.com/ckeditor\">Twitter</a> pages.\n</p>\n\n\n<p>To upgrade CKEditor, proceed as follows:</p>\n\n<ol>\n<li><strong>Rename</strong> your existing editor folder to a backup folder, for example <code>ckeditor_old</code>.</li>\n<li><strong>Download</strong> the latest version from the official <a href=\"http://ckeditor.com/download\">CKEditor Download</a> site.\n\n<ul>\n<li>If you are using one of the pre-defined presets like Standard or Full, download the same one.</li>\n<li>If you created a custom CKEditor build, you have a few options, as described in your backed-up <code>build-config.js</code> file.\n\n<ul>\n<li>You can use the unique link to download the updated version of your custom build using the latest editor release.</li>\n<li>You can use the unique link to CKBuilder pre-loaded with your custom build configuration and using the latest editor release.</li>\n<li>You can go to the <a href=\"http://ckeditor.com/builder\">CKBuilder site</a> and click the <strong>Upload build-config.js</strong> button. Select your backed-up custom build configuration file and download the updated build containing the latest versions of all selected plugins.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>Extract</strong> (decompress) the downloaded archive to the original editor directory, for example <code>ckeditor</code>.</li>\n<li><strong>Copy</strong> all configuration files that you have changed from the backup directory to their corresponding positions in the new directory. These could include (but are not limited to) the following files:\n\n<ul>\n<li><code>config.js</code></li>\n<li><code>contents.css</code></li>\n<li><code>styles.js</code></li>\n<li>custom template files</li>\n</ul>\n</li>\n</ol>\n\n","title":"Upgrading","meta_description":"How to upgrade to the latest version of CKEditor 4.","meta_keywords":"ckeditor, editor, upgrade, upgrading, download, install, installation"});