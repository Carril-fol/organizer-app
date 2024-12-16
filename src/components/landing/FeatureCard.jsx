import { Card, CardHeader, CardBody } from "@nextui-org/card";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="group flex flex-col items-center justify-center p-6 bg-gray-900">
      <CardHeader className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          {icon}
          <h2 className="font-bold text-2xl text-white">
            {title}
          </h2>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center">
        <div className="text-center text-gray-300">
          {description}
        </div>
      </CardBody>
    </Card>
  );
};



export default FeatureCard;