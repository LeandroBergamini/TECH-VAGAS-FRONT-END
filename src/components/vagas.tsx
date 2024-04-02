import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Vagas = () => {
  return (
    <div className="flex mb-16">
      <div className="mr-4">
        <ApartmentIcon />
      </div>
      <div>
        <h1 className="text-[#22C964] font-medium">
          Programa de Estágio Vallourec 2023 - Nível Superior
        </h1>
        <p className="pb-3">Estágio - 20 vagas</p>
        <p>
          Descrição: Como será seu dia a dia:Você desenvolverá ajustes, novas
          funcionalidades e atuará na resolução de débitos técnicos nos nossos
          produtos para profissionais e empresas;Você utilizará Ruby on Rails,
          RabbitMQ, SQL Server, Elasticsearch e AWS;Trabalhará na arquitetura e
          modernização de aplicações, permitindo ainda mais agilidade,...
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex">
            <LocationOnIcon className="mr-2" />
            <p>Rio das Ostras / RJ</p>
          </div>
          <div className="flex">
            <AccessTimeIcon />
            <p>27/07/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vagas;
