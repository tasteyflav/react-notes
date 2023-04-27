import { useRef, useState, FormEvent } from 'react';
import { Form, Stack, Col, Row, Button } from 'react-bootstrap';
import CreateableReactSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import { NoteData, Tag } from './App';

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tags'>
              <Form.Label>Tags</Form.Label>
              <CreateableReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={tags => {
                    setSelectedTags(
                        tags.map(tag) => {
                        return { label: tag.label, value: tag.id };
                    });
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId='markdown'>
              <Form.Label>Body</Form.Label>
              <Form.Control
                required
                as='textarea'
                ref={markdownRef}
                rows={15}
              />
            </Form.Group>
          </Col>
        </Row>
        <Stack direction='horizontal' gap={2} className='justify-content-end'>
          <Button type='submit'>Save</Button>
          <Link to='..'>
            <Button type='button' variant='outline-secondary'>
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}