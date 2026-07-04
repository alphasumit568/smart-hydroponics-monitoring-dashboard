import DeviceTable from "../components/Devices/DeviceTable";

function Devices() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Devices
        </h1>

        <p className="mt-2 text-slate-500">
          Monitor all connected hydroponic devices.
        </p>
      </div>

      <DeviceTable />
    </>
  );
}

export default Devices;