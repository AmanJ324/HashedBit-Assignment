import './IPL.css';
import  { useState, useEffect } from 'react';


const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://my-json-server.typicode.com/FreSauce/json-ipl/data'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Sort by Points (descending) then by NRR (descending)
        const sortedData = data.sort((a, b) => {
          if (b.Points !== a.Points) return b.Points - a.Points;
          return b.NRR - a.NRR;
        });
        
        setTeams(sortedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading IPL Points Table...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="ipl-container">
      <h1>IPL 2025 Points Table</h1>

      
      <table className="points-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.Team}>
              <td>{index + 1}</td>
              <td className="team-name">{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied || 0}</td>
              <td className="points">{team.Points}</td>
              <td className={team.NRR >= 0 ? 'positive' : 'negative'}>
                {team.NRR.toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;