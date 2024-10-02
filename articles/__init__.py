from ninja import Router

router = Router()

@router.get('/')
def list(request):
    return {"id": 1, "title": ''}