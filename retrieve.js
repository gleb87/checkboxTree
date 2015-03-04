$(document).ready(function() {
	var $td = $("#beginRegions");
	var $divs = $td.find("div");
	var result = {};

	result["0"] = {
		children: logChildren($td),
	};

	$divs.each(function(index) {
		var id = $(this).attr("id").slice(6);
		var title = $(this).children("input").val();
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
			var id = $(this).attr("id").slice(6);
			children.push(id);
		});

		return children;
	}
});