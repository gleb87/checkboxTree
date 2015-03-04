$(document).ready(function() {
	var $td = $("#beginRegions");
	var $divs = $td.find("div");
	var result = {};

	$divs.each(function(index) {
		var id = index + 1 + "";
		var title = $(this).children("input").val();
		$(this).data({
			id: id,
			title: title,
		});
	});

	result["0"] = {
		children: logChildren($td),
	};

	$divs.each(function(index) {
		var id = $(this).data("id");
		var title = $(this).data("title");
		var children = logChildren($(this));

		result[id] = {
			id: id,
			title: title,
		};

		if (children.length) result[id].children = children;
	});

	var string = JSON.stringify(result);
	$("body").append($("<div/>").html(string));

	function logChildren($elem) {
		var children = [];
		$elem.children("div").each(function() {
			var id = $(this).data("id");
			children.push(id);
		});

		return children;
	}
});