

const Links = ({route}) => {
    return (
        <div>
                <li className="text-lg mr-12 font-semibold">
                    <a href={route.path}>{route.name}</a>
                </li>
        </div>
    );
};

export default Links;