
function Usuario({user}){
    return (
        <div class="card" style={{width: "18rem"}}>
            
            <div class="card-body">
                <p>{user.id}</p>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
                <p>{user.first_name}</p>
                <p>{user.gender}</p>
                <p>{user.username}</p>
            </div>
        </div>
    );
}
export default Usuario;