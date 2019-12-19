exports.getHome = async (req, res, next) => {
	res.render('index', {
		title: 'Hello twinsstore'
	});
};
