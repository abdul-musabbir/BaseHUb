import cn from "./../lib/cn";
export default function Button({
  children,
  name,
  className,
  Icon,
  iClass,
  ...rest
}) {
  return (
    <button className={cn("", className)} {...rest}>
      {children}
      {name || ("Button" && Icon && "")} {Icon && <Icon className={iClass} />}
    </button>
  );
}
