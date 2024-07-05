import cn from "./../lib/cn";
export default function Button({ name, className, Icon, iClass, ...rest }) {
  return (
    <button className={cn("", className)} {...rest}>
      {name || ("Button" && Icon && "")} {Icon && <Icon className={iClass} />}
    </button>
  );
}
