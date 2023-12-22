export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul>
        {contacts.map(item => {
          return (
            <li key={item.id}>
              {item.name}: {item.number}
              <button
                type="button"
                name="delete"
                onClick={() => onRemoveContact(item.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
