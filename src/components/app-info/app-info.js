import './app-info.css';

const AppInfo = (props) => {
    const {numberEmployees,numberEmployeesWithIncrease}=props
    return (
        <div className="app-info">
            <h1>Облік працівників у компанії Navi</h1>
            <h2>Загальне число працівників: {numberEmployees} </h2>
            <h2>Премію отримають: {numberEmployeesWithIncrease}</h2>
        </div>
    )
}
export default AppInfo;