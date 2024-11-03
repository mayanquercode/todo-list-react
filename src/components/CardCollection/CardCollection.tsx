import Icons, {IconName} from '../Icons'

interface Props {
  id: string;
  name: string;
  icon: IconName
}

export default function CardCollection({ name, icon }: Props) {
  return (
    <article className="p-4 rounded-lg bg-slate-800">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-600 mb-2">
        <Icons name={icon} className="text-3xl text-gray-100" />
      </div>
      <h3 className="text-2xl font-bold text-gray-100 mb-2">{name}</h3>
      <p className="text-sm font-light text-gray-100 opacity-65">2/10 done</p>
    </article>
  );
}
