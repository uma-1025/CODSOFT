function SkillCard({title,description,logo})
{
    return(
        <div className="card">
            <h3>{title}</h3>
            {logo && <img src={logo} alt={title} className="image"/>}
            <p>{description}</p>
        </div>
    );
}
export default SkillCard;