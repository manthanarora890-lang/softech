import Card from 'react-bootstrap/Card';

function Car()
{
    return(
        <div style={{ display: "flex", gap: "120px" }}>
          <>
      {[
         
        'Success',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>1.</Card.Header>
          <Card.Body>
            <Card.Title>{variant} practical learning </Card.Title>
            <Card.Text>
               Learn programming through hands-on practice, coding exercises, assignments, and real-world projects. We focus on understanding concepts rather than just memorizing them.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
       {[
         
        'info',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>2.</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Expert Guidance</Card.Title>
            <Card.Text>
              Get guidance from experienced instructors who explain concepts step-by-step and help students solve their doubts and improve their programming skills.
               </Card.Text>
          </Card.Body>
        </Card>
      ))}
       {[
         
        'danger',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>3.</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Friendly Environment</Card.Title>
            <Card.Text>
              We provide a supportive and comfortable environment where students can ask questions freely, practice coding, and learn at their own pace.
               </Card.Text>
          </Card.Body>
        </Card>
      ))}
        {[
         
        'light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>4.</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Complete Learning Support</Card.Title>
            <Card.Text>
                From basic programming concepts to advanced topics, we provide structured learning, regular practice, assignments, projects, and doubt-solving support.
                 </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </>
    </div>
    );
}
export default Car;