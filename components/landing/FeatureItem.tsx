interface FeatureItemProps {
  title: string;
  description: string;
}

export const FeatureItem = ({ title, description }: FeatureItemProps) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);
