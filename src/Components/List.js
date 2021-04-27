

function List({users}) {
    return (
        <div className="List">
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))
        }
        </div>
    );
}

export default List;
