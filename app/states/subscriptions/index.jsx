export default function subscriptions(dispatch,history){
	history.listen(location => console.log(location.pathname))
}