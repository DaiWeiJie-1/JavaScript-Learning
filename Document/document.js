<!DOCTYPE html>
<html>
<head>
	<title>document</title>
	<script type="text/javascript">
		var findJs = function () {
			//find dom JavaScript
			return document.getElementById('p1').innerHTML;
		}

	</script>
</head>
<body>

<!-- html -->
<div id = "div1">
	<div class = "div2">
		<p id = "p1">JavaScript</p>
		<p> Java</p>
	</div>

	<div class = "div3">
		<p>Python</p>
		<p>Ruby</p>
		<p>Swift</p>
	</div>

	<div class = "div4">
		<p>Scheme</p>
		<p>Haskell</p>
	</div>
	
</div>

<Button onClick='alert(findJs())'>Find JavaScript</Button>
</body>
</html>