Ext.data.JsonP.CKEDITOR_style({"tagname":"class","name":"CKEDITOR.style","autodetected":{},"files":[{"filename":"style.js","href":"style.html#CKEDITOR-style"}],"members":[{"name":"alwaysRemoveElement","tagname":"property","owner":"CKEDITOR.style","id":"property-alwaysRemoveElement","meta":{}},{"name":"includeReadonly","tagname":"property","owner":"CKEDITOR.style","id":"property-includeReadonly","meta":{}},{"name":"constructor","tagname":"method","owner":"CKEDITOR.style","id":"method-constructor","meta":{}},{"name":"apply","tagname":"method","owner":"CKEDITOR.style","id":"method-apply","meta":{}},{"name":"applyToObject","tagname":"method","owner":"CKEDITOR.style","id":"method-applyToObject","meta":{}},{"name":"applyToRange","tagname":"method","owner":"CKEDITOR.style","id":"method-applyToRange","meta":{}},{"name":"buildPreview","tagname":"method","owner":"CKEDITOR.style","id":"method-buildPreview","meta":{}},{"name":"checkActive","tagname":"method","owner":"CKEDITOR.style","id":"method-checkActive","meta":{}},{"name":"checkApplicable","tagname":"method","owner":"CKEDITOR.style","id":"method-checkApplicable","meta":{}},{"name":"checkElementMatch","tagname":"method","owner":"CKEDITOR.style","id":"method-checkElementMatch","meta":{}},{"name":"checkElementRemovable","tagname":"method","owner":"CKEDITOR.style","id":"method-checkElementRemovable","meta":{}},{"name":"remove","tagname":"method","owner":"CKEDITOR.style","id":"method-remove","meta":{}},{"name":"removeFromRange","tagname":"method","owner":"CKEDITOR.style","id":"method-removeFromRange","meta":{}},{"name":"getStyleText","tagname":"method","owner":"CKEDITOR.style","id":"static-method-getStyleText","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.style","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/style.html#CKEDITOR-style' target='_blank'>style.js</a></div></pre><div class='doc-contents'><p>TODO...</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-alwaysRemoveElement' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-property-alwaysRemoveElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-property-alwaysRemoveElement' class='name expandable'>alwaysRemoveElement</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that any matches element of this style will be eventually removed\nwhen calling CKEDITOR.editor.removeStyle. ...</div><div class='long'><p>Indicates that any matches element of this style will be eventually removed\nwhen calling <a href=\"#!/api/CKEDITOR.editor-method-removeStyle\" rel=\"CKEDITOR.editor-method-removeStyle\" class=\"docClass\">CKEDITOR.editor.removeStyle</a>.</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>4.0</b></p>\n</div></div></div><div id='property-includeReadonly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-property-includeReadonly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-property-includeReadonly' class='name expandable'>includeReadonly</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Indicates that fully selected read-only elements will be included when\napplying the style (for inline styles only). ...</div><div class='long'><p>Indicates that fully selected read-only elements will be included when\napplying the style (for inline styles only).</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>3.5</b></p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.style-method-constructor' class='name expandable'>CKEDITOR.style</a>( <span class='pre'>styleDefinition, variablesValues</span> ) : <a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a style class instance. ...</div><div class='long'><p>Creates a style class instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>styleDefinition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>variablesValues</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.style\" rel=\"CKEDITOR.style\" class=\"docClass\">CKEDITOR.style</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-apply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-apply' class='name expandable'>apply</a>( <span class='pre'>document</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>document</span> : <a href=\"#!/api/CKEDITOR.dom.document\" rel=\"CKEDITOR.dom.document\" class=\"docClass\">CKEDITOR.dom.document</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyToObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-applyToObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-applyToObject' class='name expandable'>applyToObject</a>( <span class='pre'>element</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyToRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-applyToRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-applyToRange' class='name expandable'>applyToRange</a>( <span class='pre'>range</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>range</span> : <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildPreview' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-buildPreview' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-buildPreview' class='name expandable'>buildPreview</a>( <span class='pre'>label</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the preview HTML based on the styles definition. ...</div><div class='long'><p>Builds the preview HTML based on the styles definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>label</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-checkActive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-checkActive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-checkActive' class='name expandable'>checkActive</a>( <span class='pre'>elementPath</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the style state inside an element path. ...</div><div class='long'><p>Get the style state inside an element path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>elementPath</span> : <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">CKEDITOR.dom.elementPath</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the element is active in the path.</p>\n</div></li></ul></div></div></div><div id='method-checkApplicable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-checkApplicable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-checkApplicable' class='name expandable'>checkApplicable</a>( <span class='pre'>elementPath, [filter]</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether this style can be applied at the specified elements-path. ...</div><div class='long'><p>Whether this style can be applied at the specified elements-path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>elementPath</span> : <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">CKEDITOR.dom.elementPath</a><div class='sub-desc'><p>The elements-path to\n    check the style against.</p>\n</div></li><li><span class='pre'>filter</span> : <a href=\"#!/api/CKEDITOR.filter\" rel=\"CKEDITOR.filter\" class=\"docClass\">CKEDITOR.filter</a> (optional)<div class='sub-desc'><p>If defined, the style will be\n    checked against this filter as well.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if this style can be applied at the element path.</p>\n</div></li></ul></div></div></div><div id='method-checkElementMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-checkElementMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-checkElementMatch' class='name expandable'>checkElementMatch</a>( <span class='pre'>element, fullMatch</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the element matches the current style definition. ...</div><div class='long'><p>Check if the element matches the current style definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fullMatch</span> : Boolean<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-checkElementRemovable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-checkElementRemovable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-checkElementRemovable' class='name expandable'>checkElementRemovable</a>( <span class='pre'>element, fullMatch</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if an element, or any of its attributes, is removable by the\ncurrent style definition. ...</div><div class='long'><p>Checks if an element, or any of its attributes, is removable by the\ncurrent style definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fullMatch</span> : Boolean<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-remove' class='name expandable'>remove</a>( <span class='pre'>document</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>document</span> : <a href=\"#!/api/CKEDITOR.dom.document\" rel=\"CKEDITOR.dom.document\" class=\"docClass\">CKEDITOR.dom.document</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeFromRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-method-removeFromRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-method-removeFromRange' class='name expandable'>removeFromRange</a>( <span class='pre'>range</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>range</span> : <a href=\"#!/api/CKEDITOR.dom.range\" rel=\"CKEDITOR.dom.range\" class=\"docClass\">CKEDITOR.dom.range</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-getStyleText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.style'>CKEDITOR.style</span><br/><a href='source/style.html#CKEDITOR-style-static-method-getStyleText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.style-static-method-getStyleText' class='name expandable'>getStyleText</a>( <span class='pre'>styleDefinition</span> ) : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Build the cssText based on the styles definition. ...</div><div class='long'><p>Build the cssText based on the styles definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>styleDefinition</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});