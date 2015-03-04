function Tree(options) {
	var self = this;

	var template = _.template(options.template);
	var treeData = options.treeData;

	var elem;

	function render() {
		elem = $(template({
				id: "0",
				treeData: treeData,
			})).addClass("tree")
			.on("click", ".toggle-button", onTreeItemClick)
			.on("selectstart mousedown", false);

		elem.find("li input").change(onCheckBoxChange);
	}

	function toggleTreeItem(treeItem) {
		if (!treeItem.children("ul").length) {
			var id = treeItem.children("input").attr("id");
			var ul = $(template({
				id: id,
				treeData: treeData,
			}));
			treeItem.append(ul);

			ul.find("li input").change(onCheckBoxChange);

			var checkbox = treeItem.children("input");
			if (checkbox.prop("checked")) treeItem.find("input").prop("checked", true);
		};

		treeItem.toggleClass("opened");
	}

	function onCheckBoxChange() {
		var checkbox = $(this);
		var treeItem = checkbox.parent();
		if (!treeItem.hasClass("tree-item")) return;

		if (checkbox.prop("checked")) {
			if (!treeItem.hasClass("opened")) toggleTreeItem(treeItem);

			treeItem.find("input").prop("checked", true);
		} else {
			treeItem.find("input").prop("checked", false);
		}
	}

	function onTreeItemClick() {
		var treeItem = $(this).parent();

		toggleTreeItem(treeItem);
	}


	self.getElement = function() {
		if (!elem) render();

		return elem;
	}
}