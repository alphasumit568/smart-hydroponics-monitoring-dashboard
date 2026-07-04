import SummaryCard from "./SummaryCard";
import { dashboardCards } from "../../constants/dashboardCards";

function SummaryCards({ dashboard }) {
  const latest = dashboard?.latestSensorReading;

  const cards = dashboardCards.map((card) => {
  switch (card.title) {
    case "Temperature":
      return {
        ...card,
        value:
          latest?.temperature !== undefined
            ? `${latest.temperature} °C`
            : "-- °C",
      };

    case "Humidity":
      return {
        ...card,
        value:
          latest?.humidity !== undefined
            ? `${latest.humidity} %`
            : "-- %",
      };

    case "pH Level":
      return {
        ...card,
        value:
          latest?.ph !== undefined
            ? latest.ph
            : "--",
      };

    case "EC":
      return {
        ...card,
        value:
          latest?.ec !== undefined
            ? latest.ec
            : "--",
      };

    case "Water Level":
      return {
        ...card,
        value:
          latest?.waterLevel !== undefined
            ? `${latest.waterLevel} %`
            : "-- %",
      };

    default:
      return card;
  }
});

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <SummaryCard
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
            bg={card.bg}
            progress={card.progress}
          />
        ))}
      </div>
    </section>
  );
}

export default SummaryCards;