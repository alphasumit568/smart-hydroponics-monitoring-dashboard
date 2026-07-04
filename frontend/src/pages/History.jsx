import HistoryTable from "../components/History/HistoryTable";

function History() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Sensor History
        </h1>

        <p className="mt-2 text-slate-500">
          Complete history of all sensor readings.
        </p>
      </div>

      <HistoryTable />
    </>
  );
}

export default History;